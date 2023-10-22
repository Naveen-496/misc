import { useState } from "react";

type Tag = {
  id: number;
  title: string;
};

const Tags = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  return (
    <>
      {tags.map((tag) => (
        <div key={tag.id}> {tag.title} </div>
      ))}

      <button
        onClick={() => setTags([...tags, { id: 123, title: "new Tag" }])}
      ></button>
    </>
  );
};
