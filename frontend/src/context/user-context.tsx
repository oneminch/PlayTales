import { toast } from "sonner";
import { createContext, useContext, useEffect, useState } from "react";
import type { ChildrenNodes, UserContext } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "./auth-context";
import useMutate from "@/hooks/use-mutate";
import { useNavigate } from "react-router-dom";

const initialUserContext: UserContext = {
  userInfo: null,
  userOrders: null,
  submitOrder: (_productIds: string[], _callback: () => any) => {}
};

export const userInfoQueryKey = "/user/account";
export const userOrderMutationKey = "/user/order";

export const UserCtx = createContext(initialUserContext);

export const UserProvider = ({ children }: ChildrenNodes) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoggedIn } = useAuthContext();
  const [userInfo, setUserInfo] = useState(initialUserContext.userInfo);
  const [userOrders, setUserOrders] = useState(initialUserContext.userOrders);

  const response = useQuery<any>(
    {
      queryKey: [userInfoQueryKey],
      placeholderData: {},
      enabled: !!isLoggedIn
    },
    queryClient
  );
  const { mutateAsync } = useMutate(
    userOrderMutationKey,
    queryClient,
    userInfoQueryKey
  );

  useEffect(() => {
    if (response.data.userInfo) {
      setUserInfo(response.data.userInfo);
    }
    if (response.data.userOrders) {
      setUserOrders(response.data.userOrders);
    }
  }, [response.data]);

  useEffect(() => {
    queryClient.refetchQueries({
      queryKey: [userInfoQueryKey]
    });
    if (!isLoggedIn) {
      setUserInfo(null);
      setUserOrders(null);
    }
  }, [isLoggedIn]);

  const submitOrder = (productIds: string[], callback: () => any) => {
    mutateAsync({
      productIds: productIds
    })
      .then((data) => {
        toast.success(data.message, {
          action: {
            label: "View Orders",
            onClick: () => navigate("/account")
          }
        });
        callback();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <UserCtx.Provider value={{ userInfo, userOrders, submitOrder }}>
      {children}
    </UserCtx.Provider>
  );
};

export const useUserContext = () => useContext(UserCtx);
