import "./BottomImageCK.css";

export const BottomImageCK = ({ data }: any) => {
  return (
    <div className="bi_container_ck">
      <img className="bi_image_ck" src={data} />
    </div>
  );
};
