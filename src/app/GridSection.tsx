// Server Component: grid + anchor scroll
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { GridItem } from "./GridItem";

export function GridSection() {
  return (
    <div className="h-screen relative">
      <div className="h-full grid grid-cols-8 grid-rows-8 gap-6 p-4">
        <GridItem
          colStart={1}
          colEnd={3}
          rowStart={1}
          rowEnd={5}
          direction="left"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 1</h2>
        </GridItem>
        <GridItem
          colStart={1}
          colEnd={3}
          rowStart={5}
          rowEnd={9}
          direction="bottom"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 2</h2>
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={5}
          rowStart={1}
          rowEnd={3}
          direction="top"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 3</h2>
        </GridItem>
        <GridItem
          colStart={5}
          colEnd={7}
          rowStart={1}
          rowEnd={3}
          direction="right"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 4</h2>
        </GridItem>
        <GridItem
          colStart={7}
          colEnd={9}
          rowStart={1}
          rowEnd={4}
          direction="top"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 5</h2>
        </GridItem>
        <GridItem
          colStart={7}
          colEnd={9}
          rowStart={4}
          rowEnd={9}
          direction="right"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 6</h2>
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={6}
          rowStart={7}
          rowEnd={9}
          direction="left"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 7</h2>
        </GridItem>
        <GridItem
          colStart={6}
          colEnd={7}
          rowStart={7}
          rowEnd={9}
          direction="bottom"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 8</h2>
        </GridItem>
        <GridItem
          colStart={3}
          colEnd={7}
          rowStart={3}
          rowEnd={7}
          direction="bottom"
          bgClass="bg-amber-200"
        >
          <h2 className="text-xl font-bold">Block 9</h2>
        </GridItem>
      </div>

      <a
        href="#yellow-section"
        aria-label="Scroll to next section"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                   bg-white/50 text-black px-4 py-2 rounded-full
                   hover:bg-opacity-75 transition"
      >
        <ChevronDownIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
