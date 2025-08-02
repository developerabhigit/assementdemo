import React from "react";

const WebDesigner = () => {
  return (
    <section className="px-[6px] md:px-[30px] lg:px-[98px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center w-full py-6">
          {/* Back Button */}
          <div className="hidden md:block md:w-[10%]">
            <button
              className="rounded-sm cursor-pointer bg-[#D9D9D9] text-white px-[10px] py-[3px] font-poppins font-medium text-[11px] md:text-base"
              aria-label="Go Back"
            >
              Back
            </button>
          </div>

          {/* Main Title and CTA Section */}
          <div className="flex md:w-[90%]">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="font-poppins font-semibold text-3xl text-[#1E2A2E] mb-2">
                Web Designer
              </h1>

              <p className="text-[#828282] font-poppins font-medium text-sm text-center mb-6 md:hidden px-5">
                Your top 5 local professional matches are below. You can contact
                any of the professionals to get more information using the
                contact button.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center rounded-sm cursor-pointer text-white px-[29px] py-[3px] font-poppins font-medium text-[15px] bg-primary"
                  aria-label="See your matches"
                >
                  Your matches
                </button>

                <button
                  className="flex items-center rounded-sm cursor-pointer text-white px-[29px] py-[3px] font-poppins font-medium text-[15px] bg-black"
                  aria-label="See your replies"
                >
                  Replies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesigner;
