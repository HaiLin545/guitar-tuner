import React, { useRef, useEffect, useState } from "react";
import style from "./ScrollView.module.less";
import allPitch from "../../data/allPitch";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";

const startIndex = allPitch[0].index;

export function ScrollView({ initIndex, onChange }) {
	const ListRef = useRef(null);
	const ItemRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(initIndex - startIndex);

	useEffect(() => {
		scrollToIndex(initIndex - 24);
	}, [initIndex]);

	const scrollToIndex = (index) => {
		console.log("scroll to index", index);
		ListRef.current.scroll({
			left: index * ItemRef.current.getBoundingClientRect().width,
			behavior: "smooth",
		});
		setCurrentIndex(index);
		onChange({ ...allPitch[index] });
	};

	const handleScrollBack = () => {
		scrollToIndex(currentIndex - 1);
	};

	const handleScrollForward = () => {
		scrollToIndex(currentIndex + 1);
	};

	return (
		<div className={style.scrollView}>
			<div className={style.backIcon} onClick={handleScrollBack}>
				<IconButton>
					<ArrowBack />
				</IconButton>
			</div>
			<div className={style.pitchList} ref={ListRef}>
				<div className={style.pitchItem} ref={ItemRef}></div>
				<div className={style.pitchItem}></div>
				<div className={style.pitchItem}></div>
				{allPitch.map((p, index) => {
					return (
						<div
							key={p.index}
							className={style.pitchItem}
							onClick={() => scrollToIndex(index)}
						>
							<div className={style.frequency}>
								{p.frequency}
								<br />
								Hz
							</div>
							<div className={style.pitchName}>
								<span>{p.pitch}</span>
								<sub>{p.number}</sub>
							</div>
						</div>
					);
				})}
				<div className={style.pitchItem}></div>
				<div className={style.pitchItem}></div>
				<div className={style.pitchItem}></div>
			</div>
			<div className={style.forwardIcon} onClick={handleScrollForward}>
				<IconButton>
					<ArrowForward />
				</IconButton>
			</div>
		</div>
	);
}
