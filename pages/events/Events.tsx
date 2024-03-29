import Card from "../../components/ArticleCard";
// import Carousel from "../../components/Carousel";
import pb from "../api/pocketbase";
// import Link from "next/link";
import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState();
  //   const [projects, setProjects] = useState();

  const getevents = () => {
    pb.collection("events")
      .getFullList(200 /* batch size */, {
        sort: "-created",
      })
      .then((res) => {
        setEvents(res);
      });
  };

  //   const getprojects = () => {
  //     pb.collection("projects")
  //       .getFullList(200 /* batch size */, {
  //         sort: "-created",
  //       })
  //       .then((res) => {
  //         setProjects(res);
  //       });
  //   };

  useEffect(() => {
    getevents();
    // getprojects();
  }, []);

  return (
    <div>
      <h3 class="flex items-center text-5xl font-extrabold dark:text-white">
        Events
      </h3>
      <div class="flex flex-wrap justify-center -mb-4 -mx-2">
        {events?.map((event) => (
          <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
            <Card
              item={{
                title: event.title,
                text: event.body,
                id: event.id,
                images: event.images,
              }}
            />
          </div>
        ))}
      </div>
      {/* <h3 class="flex items-center text-5xl font-extrabold dark:text-white">
        Projects
      </h3>
      <div class="flex flex-wrap justify-center -mb-4 -mx-2">
        {projects?.map((project) => (
          <div class="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
            <Card
              item={{
                title: project.title,
                text: project.text,
                id: project.id,
              }}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}
