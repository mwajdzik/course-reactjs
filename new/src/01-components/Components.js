import React from "react";
import faker from "@faker-js/faker";

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

function fakeComment() {
    return {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
        date: "Today at " + faker.time.recent('abbr'),
        text: faker.lorem.text(),
    }
}

const Components = () => {
    return <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail comment={fakeComment()}/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail comment={fakeComment()}/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail comment={fakeComment()}/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail comment={fakeComment()}/>
        </ApprovalCard>
    </div>
};

export default Components;
