import React, { Fragment, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import useHttp from "../../../hooks/use-http";
import { addBook } from "../../../lib/api";
import UploadBookButton from "./UploadBookButton";

const AddFrom = () => {
  const { sendRequest, status } = useHttp(addBook);

  const isNotEmpty = (value) => value.trim() !== "";

  const history = useHistory();

  const [bookImage, setBookImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/book-reviews-a9b02.appspot.com/o/book_img%2Ffaverate-b%C3%B4k.png?alt=media&token=629e8836-218c-4e6b-bf6d-45feeb54ba64"
  );

  const {
    value: enteredGenres,
    valueChangeHandler: genresChangeHandler,
    isValid: enteredGenresValid,
  } = useInput(isNotEmpty);

  const {
    value: enteredTitle,
    valueChangeHandler: titleChangeHandler,
    isValid: titleValid,
  } = useInput(isNotEmpty);

  const {
    value: enteredBookId,
    valueChangeHandler: bookidChangeHandler,
    isValid: bookIdValid,
  } = useInput(isNotEmpty);

  const {
    value: enteredAuthor,
    valueChangeHandler: authorChangeHandler,
    isValid: authorValid,
  } = useInput(isNotEmpty);

  const {
    value: enteredDescription,
    valueChangeHandler: descriptionChangeHandler,
    isValid: descriptionValid,
  } = useInput(isNotEmpty);

  const { value: enteredPages, valueChangeHandler: pagesChangeHandler } =
    useInput(() => {});

  const { value: enteredPublish, valueChangeHandler: publishChangeHandler } =
    useInput(() => {});

  useEffect(() => {
    if (status === "completed") {
      history.push(`/book/${enteredBookId}`);
    }
  }, [status, history, enteredBookId]);

  let formIsValid = false;

  if (
    enteredGenresValid &&
    titleValid &&
    bookIdValid &&
    authorValid &&
    descriptionValid
  ) {
    formIsValid = true;
  }

  const formClassName = formIsValid
    ? "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
    : "cursor-not-allowed bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150";
  const imgUploadHandler = (img) => {
    setBookImage(img);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const bookData = {
      genres: enteredGenres,
      title: enteredTitle,
      bookId: enteredBookId,
      author: enteredAuthor,
      description: enteredDescription,
      pages: enteredPages,
      publish: enteredPublish,
      link: bookImage,
      score: 0,
    };

    sendRequest(bookData);
  };
  return (
    <Fragment>
      <div className="container mx-auto px-4 h-full mt-10">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full  lg:w-12/12 px-4 py-10">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="px-6 mb-8">
                  <img
                    alt="..."
                    src={bookImage}
                    className="shadow-lg mx-auto max-w-200-px"
                  />
                </div>

                <form onSubmit={submitHandler}>
                  <UploadBookButton imgUpload={imgUploadHandler} />
                  <br></br>
                  <div className="relative w-full mb-3 mt-10">
                    <input
                      id="genres"
                      value={enteredGenres}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={genresChangeHandler}
                      placeholder="Th??? lo???i (V?? d???: Vi???n t?????ng)"
                    />
                  </div>
                  <br></br>
                  <div className="textarea w-full mb-3">
                    <input
                      id="Title"
                      value={enteredTitle}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={titleChangeHandler}
                      placeholder="T??n s??ch (V?? d???: ?????c nh??n t??m)"
                    />
                  </div>
                  <br></br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Bookid"
                      value={enteredBookId}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={bookidChangeHandler}
                      placeholder="ID S??ch (V?? d???: 01234)"
                    />
                  </div>
                  <br></br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Author"
                      value={enteredAuthor}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={authorChangeHandler}
                      placeholder="T??c gi??? (V?? d???: Nguy???n Du)"
                    />
                  </div>
                  <br></br>
                  
                  <div className="relative w-full mb-3">
                    <textarea
                      id="Description"
                      value={enteredDescription}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 row-5"
                      style={{ height: "150px" }}
                      onChange={descriptionChangeHandler}
                      placeholder="Mi??u t??? v??? s??ch"
                    ></textarea>
                  </div>

                  <br></br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Pages"
                      value={enteredPages}
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={pagesChangeHandler}
                      placeholder="S??? trang (V?? d??? : 160)"
                    />
                  </div>
                  <br></br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Publish"
                      value={enteredPublish}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={publishChangeHandler}
                      placeholder="Nh?? xu???t b???n (V?? d???: Kim ?????ng)"
                    />
                  </div>
                  <br></br>

                  <div className="text-center ">
                    <button
                      id="show-info"
                      className={formClassName}
                      type="submit"
                      disabled={!formIsValid}
                    >
                      Th??m s??ch
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddFrom;
