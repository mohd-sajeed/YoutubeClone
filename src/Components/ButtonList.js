import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = ({
  All,
  Music,
  Dramedy,
  Movie,
  Bollywood,
  Gaming,
  Live,
}) => {

  const isMenuOpen = useSelector(store =>store.app.isMenuOpen)
  return (
    <div className={`flex ml-12 font-medium mr-3 text-sm z-40 bg-white pb-2 mt-[80px] ${!isMenuOpen? "" : "ml-[300px]"}`  }>
      <Button name="All" />
      <Button name="Music" />
      <Button name="Dramedy" />
      <Button name="Movie" />
      <Button name="Bollywood" />
      <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Cricket" />
      <Button name="Cooking" />
      <Button name="History" />
      <Button name="Games" />
    </div>
  );
};

export default ButtonList;
