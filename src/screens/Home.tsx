import { useState } from "react";
import Button from "../components/Button";
import ChatBubble from "../components/ChatBubble";
import FileInput from "../components/Dropzone";
import Layout from "../components/Layout";
import { AppMainColor } from "../Static";
import { UploadFiles } from "../api/services";
import { toast } from "react-toastify";
export default function Home() {
  const [bookingFiles, setBookingFiles] = useState([] as File[]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [cancelletionFile, setCancelletionFile] = useState([] as File[]);
  function nowhere() {
    location.reload();
  }
  function submitForm() {
    console.log("submitForm");
    handleUpload();
  }
  async function handleUpload() {
    setSubmitLoading(true);
    
    try {
      const promise = UploadFiles(cancelletionFile, bookingFiles);
      
      toast.promise(
        promise,
        {
          pending: "Wait",
          success: "Files uploaded 👌",
          error: "Files not uploaded 🤯",
        },
        {
          closeButton: false,
          position: "top-right",
          autoClose: 1500,
          theme: "light",
        }
      );

      await promise;
      setBookingFiles([]);
      setCancelletionFile([]);
    } catch (error) {
      console.error("File upload error:", error);
    } finally {
      setSubmitLoading(false);
    }
  }
  function uploadBookingFile(files: File[]) {
    setBookingFiles((prev) => [...prev, ...files]);
  }
  function removeBookingFile(file: File) {
    setBookingFiles((prev) => prev.filter((f) => f !== file));
  }
  function uploadCancelletionFile(files: File[]) {
    setCancelletionFile((prev) => [...prev, ...files]);
  }
  function removeCancelletionFile(file: File) {
    setCancelletionFile((prev) => prev.filter((f) => f !== file));
  }

  return (
    <Layout>
      <div className="w-full absolute inset-x-0 start-0 overflow-hidden">
        {/* Desktop SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-[400px] hidden lg:block"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1440 0H0V170V206V352.077C9.77661 353.636 20.2249 355.55 31.7104 357.654C121.543 374.107 274.824 402.18 666.427 363.544C1019.76 328.683 1378.65 349.018 1440.5 363.544V170H1440V0Z"
            fill={AppMainColor}
          />
        </svg>

        {/* Mobile SVG */}
        <svg
          className="absolute top-0 left-0 w-full h-[317px] block lg:hidden"
          viewBox="0 0 100 317"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 0H0V257H0.0151V306.692C0.779 307.212 1.595 307.85 2.493 308.551C9.511 314.036 21.485 323.393 52.08 310.515C79.684 298.894 95.182 305.673 100.015 310.515V257H100V0Z"
            fill={AppMainColor}
          />
        </svg>

        <div className="w-full h-[317px] lg:h-[400px] flex items-center relative z-10">
          <div className="w-full max-w-7xl mx-auto flex flex-col justify-start items-start gap-6 lg:gap-3 px-4 lg:px-8 lg:-mt-12">
            <div className="flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="w-full flex items-center mb-0 lg:mb-4">
                  <div className="w-[124px] h-[120px] relative z-20">
                    <img
                      alt="Captain Frank"
                      fetchPriority="high"
                      className="lg:scale-[1.25] object-contain origin-left"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent",
                      }}
                      src="https://ik.imagekit.io/0adjo0tl4/Mask%20group.svg"
                    />
                  </div>
                  <div className="flex flex-col ml-4 lg:ml-14 z-10">
                    <div className="flex text-white text-sm lg:text-lg font-normal leading-tight lg:leading-normal">
                      Chat with
                    </div>
                    <div className="text-white text-[28px] sm:text-[34px] lg:text-[41.93px] font-semibold leading-[34px] sm:leading-[40.80px] lg:leading-[50.31px]">
                      Captain &nbsp;Frank
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-col gap-1 md:gap-2 md:mt-2 w-full overflow-hidden">
                <div className="flex flex-col md:flex-row items-start gap-2 w-full overflow-hidden">
                  <div className="flex flex-wrap items-center shrink-0">
                    <div className="opacity-70 text-white text-[34px] lg:text-[41.93px] font-semibold font-heebo leading-[40.80px] lg:leading-[50.31px] break-words">
                      Hi there
                    </div>
                    <div className="text-[#f8f8f8] text-[34px] lg:text-[41.93px] font-normal font-inter leading-[40.80px] lg:leading-[50.31px] ml-2">
                      👋
                    </div>
                  </div>
                  <div className="w-full overflow-hidden flex">
                    <span className="text-[#fcc7c3] text-[34px] lg:text-[41.93px] font-semibold font-heebo leading-[40.80px] lg:leading-[50.31px] break-all">
                      I'm here to help with
                    </span>
                  </div>
                </div>
                <div className="w-full flex">
                  <span className="text-white text-[34px] lg:text-[41.93px] font-semibold font-heebo leading-[40.80px] lg:leading-[50.31px] break-words block">
                    Flight Issues
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex flex-col items-center justify-center mt-[330px] lg:mt-[420px] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <div className="w-full flex flex-col items-center justify-center">
          <div
            className="flex flex-col items-center justify-center px-2 lg:px-3 h-[75px] lg:h-[200px] w-full rounded-tl-3xl rounded-tr-3xl [border-bottom-left-radius:30px] lg:[border-bottom-left-radius:80px] [border-bottom-right-radius:30px] lg:[border-bottom-right-radius:80px]"
            style={{
              backgroundColor: AppMainColor,
            }}
          >
            <ChatBubble
              avatar="https://ik.imagekit.io/0adjo0tl4/Mask%20group.svg"
              message="Welcome to your claim."
              isSender={false}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center px-2 lg:px-3">
            <ChatBubble
              avatar="https://ik.imagekit.io/0adjo0tl4/Mask%20group.svg"
              message="We are still missing some documents. If you want, you can provide them to us now."
              isSender={false}
            />
            <div className="w-full flex flex-col items-start justify-center">
              <h4 className="text-[14px] sm:text-[15px]">
                Booking confirmation
              </h4>
              <FileInput
                acceptedFileTypes="application/pdf"
                fileListExternal={bookingFiles}
                uploadFile={uploadBookingFile}
                removeFileExternal={removeBookingFile}
                bottomInfo="The booking confirmation or invoice for the booking (pdf)."
              />
            </div>
            <div className="w-full flex flex-col items-start justify-center mt-4">
              <h4 className="text-start text-[14px] sm:text-[15px]">
                Notification of the airline in case of flight cancellation (if
                applicable)
              </h4>
              <FileInput
                fileListExternal={cancelletionFile}
                uploadFile={uploadCancelletionFile}
                removeFileExternal={removeCancelletionFile}
                acceptedFileTypes="image/*"
                bottomInfo="We need this as proof to the airline"
              />
            </div>
            <hr className="w-full border-gray-300 mt-4" />
            <ChatBubble
              avatar="https://ik.imagekit.io/0adjo0tl4/Mask%20group.svg"
              message="So that your companion does not have to go through the whole process again, you can now use this link and send it to them:"
              isSender={false}
              bubbleColorIsGreen={true}
              hasLink={true}
              link="https://secure.captain-frank.com/produkte/euclaim/funnel/recommendation/9d99362f-0597-40b0-b299-e8c2c22c4000"
            />
            <hr className="w-full border-gray-300 mt-4" />
            <ChatBubble
              avatar="https://ik.imagekit.io/0adjo0tl4/Mask%20group.svg"
              message="And the same thing happens every day... Did you know that you can claim compensation retroactively for up to 3 years?"
              isSender={false}
              bubbleColorIsGreen={true}
            />
          </div>
        </div>
        <div
          className="h-[100px] lg:h-[100px] w-full rounded-bl-3xl rounded-br-3xl flex flex-row items-center justify-between px-4"
          style={{ backgroundColor: AppMainColor }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-2">
            <Button text="Back to website" onClick={nowhere} />
            <Button text="Check another flight" onClick={nowhere}/>
          </div>
          <div>
            <Button text="Submit" onClick={submitForm} disabled={submitLoading} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
