import React from "react";
import { IProduct } from "../../../interfaces/product";
import { toggleProduct } from "../../../store/productsReducer/productsReducer";
import { useAppDispatch } from "../../../hooks/redux-hooks";

import styles from "./styles.module.scss";
import catPng from "./../../../layout/images/cat.png";

interface IProductProps {
  product: IProduct;
}

export const Product: React.FC<IProductProps> = ({ product }) => {
  const [leavedMouse, setLeavedMouse] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const {
    id,
    countOfGifts,
    description,
    isDisabled,
    isPicked,
    portion,
    title,
    weigth,
  } = product;

  const correctCountPortions = React.useMemo((): string => {
    switch (portion) {
      case 1:
        return `${portion} порция`;
      case 2:
      case 3:
      case 4:
        return `${portion} порции`;
      default:
        return `${portion} порций`;
    }
  }, [portion]);

  const correctCountGifts = React.useMemo((): string => {
    switch (countOfGifts) {
      case 1:
        return `мышь в подарок`;
      case 2:
      case 3:
      case 4:
        return `${countOfGifts} мыши в подарок`;
      default:
        return `${countOfGifts} мышей в подарок`;
    }
  }, [countOfGifts]);

  const clickProductHandle = (id: number): void => {
    if (!isDisabled) {
      setLeavedMouse(false);
      dispatch(toggleProduct(id));
    }
  };

  const mouseLeaveHandle = (): void => {
    if (isPicked) {
      setLeavedMouse(true);
    }
  };

  return (
    <div className={styles.productWrapper} onMouseLeave={mouseLeaveHandle}>
      <div
        className={
          isDisabled
            ? styles.productDisabledCard
            : isPicked
            ? styles.productPickedCard
            : styles.productCard
        }
        onClick={() => clickProductHandle(id)}
      >
        <div className={styles.infoBlock}>
          <p
            className={isDisabled ? styles.disabledHeadTitle : styles.headTitle}
          >
            {leavedMouse ? "Котэ не одобряет?" : "Сказочное заморское яство"}
          </p>
          <h1 className={isDisabled ? styles.disabledTitle : styles.title}>
            Нямушка
          </h1>
          <div className={isDisabled ? styles.disabledTaste : styles.taste}>
            {title}
          </div>
          <div
            className={
              isDisabled
                ? styles.disabledDescriptionBlock
                : styles.descriptionBlock
            }
          >
            <div>{correctCountPortions}</div>
            <div>{correctCountGifts}</div>
            {isDisabled && <div>заказчик доволен</div>}
          </div>
        </div>
        <img
          className={isDisabled ? styles.disabledImgCat : styles.imgCat}
          src={catPng}
          alt="cat"
        />
        <div
          className={
            isDisabled
              ? styles.weightDisabledBlock
              : isPicked
              ? styles.weightPickedBlock
              : styles.weightBlock
          }
        >
          <div className={styles.weightCount}>{weigth}</div>
          <div className={styles.kg}> кг</div>
        </div>
      </div>
      {isDisabled ? (
        <div className={styles.disabledFooterBlock}>
          Печалька, {title} закончился.
        </div>
      ) : isPicked ? (
        <div className={styles.footerBlock}>{description}</div>
      ) : (
        <div
          className={styles.footerBlock}
          onClick={() => clickProductHandle(id)}
        >
          Чего сидишь? Порадуй котэ, <span>купи.</span>
        </div>
      )}
    </div>
  );
};
