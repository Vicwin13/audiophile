'use client'

type FeaturesDoc = {
  _id: string;
  productId: any; // Id<"products"> (keep as any if you don't have the Convex types here)
  desc_a: string;
  desc_b: string;
  itemA: string;
  itemB: string;
  itemC: string;
  itemD: string;
  itemE?: string;
  noA: number;
  noB: number;
  noC: number;
  noD: number;
  noE?: number;
} | null;


const Feature = ({features}:{features:FeaturesDoc}) => {

    if (features === undefined) return <div>Loading ...</div>
    if (!features) {
        return <div className="text-sm text-gray-500">No extra features for this product.</div>;
    }
    return (
      <>
      <div className="py-9 flex items-start justify-between">

          <div className="w-[635px]">
              <h1 className="font-bold text-[32px] pb-8 tracking-[1.14px] leading-9">FEATURES</h1>
              <div>
                {features.desc_a && <p className="font-medium text-[15px] leading-[25px] text-black/50">{ features.desc_a}</p>}  
                {features.desc_b &&<p className="font-medium pt-4 text-[15px] leading-[25px] text-black/50">
                {features.desc_b}
                  </p>}
              </div>
          </div>
          <div>
              <h1 className="font-bold text-[32px] pb-8 tracking-[1.14px] leading-9">IN THE BOX</h1>

              <div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">{ features.noA}x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">{features.itemA}</p></div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">{ features.noB}x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">{features.itemB}</p></div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">{ features.noC}x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">{features.itemC}</p></div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">{ features.noD}x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">{features.itemD}</p></div>
                  <div className="flex items-center gap-6"><span className="text-(--main-orange)">{ features.noE}x</span> <p className="text-black/50 font-medium text-[15px] leading-[25px]">{features.itemE}</p></div>
              </div>
              
          </div>
    </div>

         


      </>



  )
}

export default Feature