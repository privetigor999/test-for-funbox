import { IProduct } from "../../interfaces/product";

export const productsData: IProduct[] = [
  {
    id: 1,
    title: "с фуа-гра",
    portion: 10,
    countOfGifts: 1,
    description: "Печень утки разварная с артишоками.",
    weigth: 0.5,
    isPicked: false,
    isDisabled: false,
  },
  {
    id: 2,
    title: "с рыбой",
    portion: 40,
    countOfGifts: 2,
    description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
    weigth: 2,
    isPicked: true,
    isDisabled: false,
  },
  {
    id: 3,
    title: "с курой",
    portion: 100,
    countOfGifts: 5,
    description: "Филе из цыплят с трюфелями в бульоне.",
    weigth: 5,
    isPicked: false,
    isDisabled: true,
  },
];
