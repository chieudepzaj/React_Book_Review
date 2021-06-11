import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getProfile } from "../../lib/api";
import ProfileDetail from "./components/ProfileDetail";
import BooksList from "./components/BooksList";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const DUMMY_PROFILE = [
  {
    profileImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/author_img%2Ftony.jpg?alt=media&token=1ec4d8c4-0873-4524-b52e-6a8ed7bb02b7",
    name: "Tony Woodsome",
    city: "Dubai, the United Arab Emirates",
    detail: "The 23rd Prime Minister of Thailand (In office 2001 - 2006)",
    username: "tonyw",
  },
  {
    profileImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/user_img%2FTJ.jpg?alt=media&token=10581eb0-fe4c-453c-b62a-3e4b84d8dec7",
    name: "Thanathorn Juangroongruangkit",
    city: "Bangkok, Thailand",
    detail:
      "Leader of Progressive Movement, Former Leader of Future Forward Party. An adventurer - all in for pushing physical & mental strength.",
    username: "Thanathorn_FWP",
  },
];

const Profile = (props) => {
  const params = useParams();

  const { username } = params;

  const {
    sendRequest,
    status,
    data: loadedProfile,
    error,
  } = useHttp(getProfile, true);
  console.log(loadedProfile);

  useEffect(() => {
    sendRequest(username);
  }, [sendRequest, username]);

  if (status === "pending") {
    console.log(loadedProfile);
    return (
      <div
        style={{
          margin: "3rem auto",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  const firstName = loadedProfile.name.substring(
    0,
    loadedProfile.name.indexOf(" ")
  );

  return (
    <Fragment>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6"></div>
              <ProfileDetail profile={loadedProfile} />;
              <div className="mt-10 py-10 border-t border-blueGray-200">
                <h3
                  className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                  style={{ marginLeft: "2rem" }}
                >
                  {`${firstName}'s Rated Book`}
                </h3>

                <div className="flex flex-wrap justify-center">
                  <BooksList />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Profile;