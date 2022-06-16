interface PropsPicked {
	title: string;
	urlPhoto: string;
	percent: number;
}

export default function Picked(props: PropsPicked) {
	return (
		<div className="w-1/2">
			<div className="items-center px-5 py-3 border-b-2 text-xs font-semibold uppercase tracking-widest">
				<div className="flex transition hover:text-pink-700 hover:-translate-y-0.5 hover:scale-y-105">
					{props.title}
				</div>
			</div>
			<div className="flex justify-center mt-8 mb-5 translate-x-4 hover:-translate-y-0.5 hover:scale-105">
				<img src={props.urlPhoto} className="w-36 h-36 rounded-full border-dashed" />
				<p className="flex font-bold">{props.percent.toFixed(0)}%</p>
			</div>
		</div>
	);
}