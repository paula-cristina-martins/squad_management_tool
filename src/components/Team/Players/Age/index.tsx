import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlayerData } from "../../../../interface/player";

interface PropsAge {
	title: string;
	icon: IconProp;
	typeAge: PlayerData[];
}

export default function Age(props: PropsAge) {
	return (
		<div className="w-1/2">
			<div className="rounded-lg shadow-lg mx-5 justify-center py-5 items-center">
				<div className="flex items-center px-5 py-3 border-b-2 text-xs font-semibold uppercase tracking-widest">
					<div className="flex transition hover:text-pink-700 hover:-translate-y-0.5 hover:scale-y-105">
						<FontAwesomeIcon className="w-4 h-4 pr-5" icon={props.icon} />
						{props.title}
					</div>
				</div>
				<div className="inline-block min-w-full overflow-hidden">
					<div className="w-full leading-normal">
						{props.typeAge?.map((data: PlayerData, idx: number) => {
							if (idx < 5) {
								return (
									<ul key={idx} className="flex w-full  hover:bg-purple-50">
										<li className="flex w-full mx-auto justify-between px-5 py-3 border-b hover:border hover:border-pink-400 text-sm">
											<p className="whitespace-no-wrap">
												{data?.name.toLocaleUpperCase()}
											</p>
											<p className="whitespace-no-wrap ml-4">
												{data?.age}
											</p>
										</li>
									</ul>
								);
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
}