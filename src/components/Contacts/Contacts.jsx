import React from "react";
import { contactsData, socialsData } from "../../data";
import { HiOutlineLocationMarker } from "react-icons/hi";
import contactsimg from "../../assets/svg/contactsBlack.svg";

const detailsIconCss =
  "bg-primary text-secondary rounded-[50%] w-11 h-11 flex items-center justify-center text-2xl ease-in-out duration-200 shrink-0 hover:scale-110 hover:text-secondary hover:bg-tertiary";

const Contacts = () => {
  const contactDetails = (value) => {
    return (
      <p className="text-tertiary ml-6 text-lg leading-[110%] font-medium font-[Poppins] w-[70%] break-words">
        {value}
      </p>
    );
  };

  const contactLink = (contact) => {
    if (contact.label === "email") return `mailto:${contact.value}`;
    else if (contact.label === "phone") return `tel:${contact.value}`;
    else if (contact.label === "address") return ``;
  };

  return (
    <div className="bg-secondary flex flex-col relative font-[Poppins] pt-8">
      <div className="flex flex-col  laptop:ml-[7%] px-8 pb-12 w-full md:w-4/5 h-full mt-8">
        <h2 className="text-primary font-bold text-[2.5rem] sm-[3.2rem] tab:text-[3.5rem] mb-8 max-tab:self-center">
          Contacts
        </h2>
        <div className="flex flex-wrap w-full justify-evenly mt-5">
          {contactsData.map((contact) => (
            <a
              className="flex items-center w-full mb-5 md:mb-10"
              href={contactLink(contact)}
            >
              <div className={detailsIconCss}>{contact.icon}</div>
              {contactDetails(contact.value)}
            </a>
          ))}
          <div className="flex items-center w-full mb-5 md:mb-10">
            <div className={detailsIconCss}>
              <HiOutlineLocationMarker />
            </div>
            {contactDetails("Visavadar, Junagadh, Gujarat, India - 362130")}
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap max-md:justify-center gap-6 md:gap-x-4 justify-center items-center w-full my-6">
            {socialsData.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-xl bg-primary text-secondary ease-in-out duration-200 hover:scale-110 hover:text-secondary hover:bg-tertiary"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <img
        src={contactsimg}
        alt="contacts"
        className="absolute right-0 bottom-0 w-72 pointer-events-none max-md:hidden"
      />
    </div>
  );
};

export default Contacts;
