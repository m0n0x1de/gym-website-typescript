type Props = {
  name: string;
  description?: string;
  image: string;
};
export const Class = ({
  name,
  description = "some description",
  image,
}: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center tex-white opacity-0 tarnsition duration-500 hover:opacity-90`;
  return (
    <li className="h-[380px relative mx-5 inline-block w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};
