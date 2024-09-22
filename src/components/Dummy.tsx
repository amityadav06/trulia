
const Dummy = () => {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-4 gap-4">
      {items.map((item, index) => {
        // Determine the layout for each item
        if (index % 6 === 0 || index % 6 === 5) {
          // 1st and 4th column (400px height)
          return (
            <div key={index} className="h-[400px] bg-blue-500 flex items-center justify-center">
              <span className="text-white text-2xl">{item}</span>
            </div>
          );
        } else {
          // 2nd and 3rd column (200px height for two items)
          return (
            <div key={index} className="flex flex-col gap-2 col-span-2">
              <div className="h-[200px] bg-green-500 flex items-center justify-center">
                <span className="text-white text-xl">{item}</span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Dummy;
