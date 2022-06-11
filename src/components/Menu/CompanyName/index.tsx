import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface PropsCompany {
  name: string;
  icon: IconProp;
}

export default function CompanyName(props: PropsCompany) {
  return (
    <div className="flex w-1/2 mx-auto justify-start items-center">
      <p className="flex items-center m-2">
        <FontAwesomeIcon className="w-8 h-8" icon={props.icon} />
      </p>
      {props.name}
    </div>
  );

}