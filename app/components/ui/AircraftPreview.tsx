import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AircraftPreview = () => {
  return (
    <div className="h-full w-[60%] rounded-lg  ">
      <Carousel className="w-full rounded-lg">
        <CarouselContent className="rounded-lg">
          <CarouselItem>
            <img
              src="/images/aircrafts/challenger/IMG_0246.JPG"
              className="rounded-lg"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/aircrafts/challenger/IMG_0282.JPG"
              className="h-full"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/aircrafts/challenger/tmg1.JPG"
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              src="/images/aircrafts/challenger/tmg3.JPG"
              className=" h-full w-full"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export const AircraftDetails = () => {
  return (
    <Tabs defaultValue="account" className="w-[500px]">
      <TabsList className="">
        <TabsTrigger value="Specifications">Specifications</TabsTrigger>
        <TabsTrigger value="Amenities">Amenities</TabsTrigger>
        <TabsTrigger value="AircraftLayout">Aircraft Layout</TabsTrigger>
      </TabsList>
      <TabsContent value="Specifications">Specifications</TabsContent>
      <TabsContent value="Amenities">Amenities</TabsContent>
      <TabsContent value="AircraftLayout">Aircraft Layout</TabsContent>
    </Tabs>
  );
};

export default AircraftPreview;
