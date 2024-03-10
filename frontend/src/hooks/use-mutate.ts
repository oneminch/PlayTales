import { QueryClient, useMutation } from "@tanstack/react-query";

const useMutate = (
  mutationKey: string,
  queryClient: QueryClient,
  invalidateKey?: string
) => {
  const key = invalidateKey ?? mutationKey;

  const mutationFn = async (data: any) => {
    try {
      const response = await fetch(`/api${mutationKey}`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message || "An Error Has Occurred.";
        throw new Error(errorMessage);
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return useMutation({
    mutationFn,
    mutationKey: [mutationKey],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [key]
      });
    }
  });
};

export default useMutate;
