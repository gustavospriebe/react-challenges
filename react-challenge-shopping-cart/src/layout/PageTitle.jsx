import React from "react";

export const PageTitle = ({ data }) => {
    return <div className="page-title">{data || "{insira um titulo}"}</div>;
};

