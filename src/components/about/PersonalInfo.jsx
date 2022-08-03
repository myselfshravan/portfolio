import React from "react";

const personalInfoContent = [
  { meta: "Name", metaInfo: "Shravan" },
  { meta: "phone", metaInfo: "+91-9945332995" },
  { meta: "Email", metaInfo: "shravan.revanna@gmail.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  // { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
