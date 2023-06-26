type CalloutBoxProps = {
  body: string;
  heading: string;
};

export const CalloutBox = ({ body, heading }: CalloutBoxProps) => {
  return (
    <div className="w-250 rounded-25 bg-eggplant-lighter p-24">
      <h4 className="pb-12 text-16 font-bold">{heading}</h4>
      <p>{body}</p>
    </div>
  );
};
