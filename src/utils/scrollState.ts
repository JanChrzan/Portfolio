import { useEffect, useState } from "react";

export const useIsVisible = (): boolean => {
		const [isVisible, setIsVisible] = useState(true);

		useEffect(() => {
				window.addEventListener("scroll", () => {
						if (window.scrollY > 0) {
								setIsVisible(false);
						} else {
								setIsVisible(true);
						}
				});
		}, []);
		return isVisible;
};