import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from "react";
import pb from "../../api/pocketbase";

function ViewPost({ project }) {
  const userModel = pb.authStore.model;

  return (
    <div>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src={project.images} alt="Photo" />

        <div class="p-5">
          <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {project.title}
            </h5>
          </Link>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.text}
          </p>
          <p></p>
          {/* {userModel.id != null && userModel.id == project.author.id ? (
            <ul>
              <li>
                <Link>Edit project</Link>
              </li>
              <li>
                <Link>Delete project</Link>
              </li>
            </ul>
          ) : (
            <div></div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const projectId = await context.query.id?.toString();
  const project = await pb
    .collection("projects")
    .getOne(projectId, {
      expand: "relField1,relField2.subRelField",
      $autoCancel: false,
    })
    .then(async (res) => {
      const myResponse = await JSON.stringify(res);
      const data = await JSON.parse(myResponse);
      return data;
    })
    .catch((err) => {
      console.log("Pocketbase error: " + err);
    });

  return { props: { project } };
}

export default ViewPost;
