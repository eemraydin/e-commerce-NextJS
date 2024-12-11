"use client";

import { products } from "@wix/stores";
import { useEffect, useState } from "react";
import Add from "./Add";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});

  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);

  const handleOptionSelection = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => {
      // If the current choice is already selected, remove it from the state
      if (prev[optionType] === choice) {
        const { [optionType]: toRemove, ...rest } = prev; // Exclude the current optionType
        return rest;
      }
      // Otherwise, set it as the selected choice
      return { ...prev, [optionType]: choice };
    });
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;
      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock.quantity &&
        variant.stock.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });
              const clickHandler = disabled
                ? undefined
                : () =>
                    handleOptionSelection(option.name!, choice.description!);
              const selected =
                selectedOptions[option.name!] === choice.description!;

              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-200 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  key={choice.value}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] rotate-45 bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-main text-main bg-white rounded-md py-1 px-4 text-sm "
                  key={choice.value}
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "0 0 0 1px #f35c7a",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
        
      />

      {/* //  <div
      //           className="flex items-center gap-4"
      //           key={choice.value}
      //           onClick={() =>
      //             handleOptionSelection(option.name!, choice.description!)
      //           }
      //         >
      //           {choice.description}
      //           {disabled && "disabled"}
      //           {selected && "selected"}
      //         </div> */}
      {/* COLOR */}
      {/*
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-200 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-200 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-200 cursor-not-allowed relative bg-orange-500">
          <div className="absolute w-10 h-[2px] rotate-45 bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul> */}
      {/* OTHERS */}
      {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-main text-main bg-white rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-main text-white bg-main rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white  bg-pink-200 rounded-md py-1 px-4 text-sm cursor-not-allowed">
          Large
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProducts;
