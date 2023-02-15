import { FC } from "react";
import { socialMediaIcon } from "../../utils/socialMediaIcon";
import { handleClickIcon } from "../../utils/handleClickIcon";
import IonIcon from "@reacticons/ionicons";

const SideSocialMediaIcon: FC = () => {
  return (
    <div className="py-8 text-3xl flex flex-col items-center md:justify-start justify-center gap-5">
      {socialMediaIcon.map((el) => (
        <div
          key={el.name}
          onClick={handleClickIcon(el.link)}
          className="px-4 py-1 text-Space-Cadet hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300"
          data-testid={el.name}
        >
          <IonIcon name={el.name} />
        </div>
      ))}
    </div>
  );
};

export default SideSocialMediaIcon;
