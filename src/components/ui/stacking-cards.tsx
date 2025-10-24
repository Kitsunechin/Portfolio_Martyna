import React from "react";

export interface StackingCardsProps<ItemType> {
	items: ItemType[];
	renderItem: (item: ItemType, index: number) => React.ReactNode;
	className?: string;
	cardClassName?: string;
	/** Sticky top offset step between cards in pixels. Default: 40 */
	offsetStepPx?: number;
}

/**
 * StackingCards renders a vertical stack of sticky cards that overlap as you scroll.
 * Each subsequent card sits slightly lower using an incremental top offset.
 */
export function StackingCards<ItemType>(props: StackingCardsProps<ItemType>) {
	const {
		items,
		renderItem,
		className = "",
		cardClassName = "",
		offsetStepPx = 40,
	} = props;

	return (
		<section className={`relative ${className}`}>
			{/* Wrapper ensures enough scroll space for stacking */}
			<div className="relative">
				{items.map((item, index) => {
					// Higher z-index for later items so they appear on top
					const zIndex = 100 - index;
					const topOffset = index * offsetStepPx;

					return (
						<div
							key={index}
							className="relative"
							style={{ minHeight: `${offsetStepPx}px` }}
						>
							<div
								className={
									`sticky left-0 right-0 mx-auto ${cardClassName}`.trim()
								}
								style={{ top: `${topOffset}px`, zIndex }}
							>
								<div
									className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
									style={{ padding: '40px' }}
								>
									{renderItem(item, index)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default StackingCards;
