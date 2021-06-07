import { Fragment } from "react";



const ProfileDetail = (props) => {
const { profileImg, name, city, detail, username } = props.profile;

  return (
    <Fragment>
       <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
          <div className="relative">
            <img
              alt="..."
              src={profileImg}
              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
         </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
          <div className="py-6 px-3 mt-32 sm:mt-0">
            <button
              className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
                Follow
            </button>
          </div>
         </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-1">
          <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                22
              </span>
              <span className="text-sm text-blueGray-400">Book Rating</span>
            </div>
          </div>
     </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          {name}
        </h3>
        <div className="text-xl leading-normal mt-0 mb-2 text-blueGray-500 font-bold">
          <i className="fas fa-at mr-2 text-lg text-blueGray-600"></i>
          {username}
        </div>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
          {city}
        </div>
        <div className="flex flex-wrap justify-center">
          <p
            className="mb-4 text-lg leading-relaxed text-blueGray-700 break-words"
            style={{ paddingLeft: "10rem", paddingRight: "10rem" }}
          >
            {detail}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileDetail;