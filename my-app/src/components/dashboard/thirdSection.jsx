import StoreCard from "./StoreCard";
export default function ThirdSection() {
   
  const stores = [
    {
      name: "New York Store",
      sales: "78%",
      members: 12,
      avatars: [
        "https://i.pravatar.cc/30?img=1",
        "https://i.pravatar.cc/30?img=2",
        "https://i.pravatar.cc/30?img=3",
      ],
      extra: "+9",
    },
    {
      name: "Los Angeles Store",
      sales: "78%",
      members: 12,
      avatars: [
        "https://i.pravatar.cc/30?img=4",
        "https://i.pravatar.cc/30?img=5",
        "https://i.pravatar.cc/30?img=6",
      ],
      extra: "+9",
    },
    {
      name: "Chicago Store",
      sales: "78%",
      members: 12,
      avatars: [
        "https://i.pravatar.cc/30?img=7",
        "https://i.pravatar.cc/30?img=8",
        "https://i.pravatar.cc/30?img=9",
      ],
      extra: "+0",
    },
    {
      name: "Houston Store",
      sales: "70%",
      members: 13,
      avatars: [
        "https://i.pravatar.cc/30?img=10",
        "https://i.pravatar.cc/30?img=11",
        "https://i.pravatar.cc/30?img=12",
      ],
      extra: "+0",
    },
  ];

  return (
    <div className=" mt-4">
      <div className="row g-3">
        {stores.map((store, index) => (
          <StoreCard key={index} {...store} />
        ))}
      </div>
    </div>
  );
}


 
