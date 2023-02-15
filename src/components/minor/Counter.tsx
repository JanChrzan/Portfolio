import { useState, FC } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useTranslation } from "react-i18next";

const Counter: FC = () => {
  const [didViewCountUp, setDidViewCountUp] = useState<boolean>(false);
  const { t } = useTranslation();

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  const Data: { countNum: number; countTitle: string }[] = [
    {
      countNum: 10,
      countTitle: t("firstCounter"),
    },
    {
      countNum: 1573,
      countTitle: t("secondCounter"),
    },
    {
      countNum: 46,
      countTitle: t("thirdCounter"),
    },
    {
      countNum: 120,
      countTitle: t("fourthCounter"),
    },
  ];

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center mt-5 items-center md:gap-7 gap-10 mx-auto md:px-10">
      {Data.map((value, index) => (
        <div className="sm:w-1/4 w-1/3" key={index}>
          <div className="flex justify-center">
            <p className="md:text-3xl text-2xl font-semibold text-white">
              <VisibilitySensor
                onChange={onVisibilityChange}
                offset={{ top: 10 }}
                delayedCall
              >
                <CountUp end={didViewCountUp ? value.countNum : 0} />
              </VisibilitySensor>
            </p>
            <p className="text-Aquamarine md:text-4xl text-3xl font-semibold -translate-y-2">
              +
            </p>
          </div>
          <p className="text-center text-xs text-Cool-Grey mt-1 h-12">
            {value.countTitle}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
