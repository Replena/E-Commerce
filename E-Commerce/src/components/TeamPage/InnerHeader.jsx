import React from "react";
import data from "../../data/data.json";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb.jsx";

function InnerHeader() {
  const innerData = data.team.innerHeader;

  return (
    <div className="flex flex-col items-center justify-center py-8 font-bold">
      <p className="text-lg text-text-secondary ">{innerData.subtitle}</p>
      <h1 className="text-4xl text-text-default">{innerData.title}</h1>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-text-default ">
              {innerData.home}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/team">{innerData.team}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default InnerHeader;
