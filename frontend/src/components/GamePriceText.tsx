const GamePriceText = ({
  price,
  discount
}: {
  price: number;
  discount: number;
}) => {
  return (
    <p className="w-full text-sm space-x-2">
      {discount > 0 && (
        <>
          <span className="bg-amber-400 text-gray-800 rounded-md text-xs py-0.5 px-1">
            -{discount}%
          </span>
          <span className="text-gray-500">
            <s>${price}</s>
          </span>
          <span className="font-medium text-gray-700">
            ${((1 - discount / 100) * price).toFixed(2)}
          </span>
        </>
      )}
      {discount <= 0 && (
        <span className="font-medium text-gray-700">${price}</span>
      )}
    </p>
  );
};

export default GamePriceText;
