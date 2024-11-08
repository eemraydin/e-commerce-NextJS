import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/product/1"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] xl:w-[18%]"
      >
        <div className="relative w-full h-80">
          {/* First Image */}
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 1"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-300 ease-in-out"
          />
          {/* Second Image */}
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 2"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-500 mt-2">My Description</div>

        <button className="mt-4 rounded-md bg-main text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-main border border-main transition-colors duration-200 ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/product/1"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] xl:w-[18%]"
      >
        <div className="relative w-full h-80">
          {/* First Image */}
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 1"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-300 ease-in-out"
          />
          {/* Second Image */}
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 2"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-500 mt-2">My Description</div>

        <button className="mt-4 rounded-md bg-main text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-main border border-main transition-colors duration-200 ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/product/1"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] xl:w-[18%]"
      >
        <div className="relative w-full h-80">
          {/* First Image */}
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 1"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-300 ease-in-out"
          />
          {/* Second Image */}
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 2"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-500 mt-2">My Description</div>

        <button className="mt-4 rounded-md bg-main text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-main border border-main transition-colors duration-200 ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/product/1"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] xl:w-[18%]"
      >
        <div className="relative w-full h-80">
          {/* First Image */}
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 1"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-300 ease-in-out"
          />
          {/* Second Image */}
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 2"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-500 mt-2">My Description</div>

        <button className="mt-4 rounded-md bg-main text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-main border border-main transition-colors duration-200 ease-in-out">
          Add to Cart
        </button>
      </Link>
      <Link
        href="/product/1"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] xl:w-[18%]"
      >
        <div className="relative w-full h-80">
          {/* First Image */}
          <Image
            src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 1"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-300 ease-in-out"
          />
          {/* Second Image */}
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image 2"
            fill
            sizes="(max-width: 768px) 45vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>

        <div className="flex justify-between mt-4">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$45</span>
        </div>
        <div className="text-sm text-gray-500 mt-2">My Description</div>

        <button className="mt-4 rounded-md bg-main text-white w-max py-2 px-4 text-xs hover:bg-white hover:text-main border border-main transition-colors duration-200 ease-in-out">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
