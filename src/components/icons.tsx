/**
 * Every icon in the guides, from Phosphor (phosphoricons.com), as on the
 * marketing site: light glyphs on the guide tiles, bold for small ones like
 * arrows. To change an icon everywhere, change it here.
 */
import type { ComponentType } from 'react';
import type { IconProps, IconWeight } from '@phosphor-icons/react';
import {
	ArrowLeft as PhArrowLeft,
	ArrowRight as PhArrowRight,
	ArrowUpRight as PhArrowUpRight,
	BookOpenText as PhBookOpenText,
	Buildings as PhBuildings,
	ChartLine as PhChartLine,
	Check as PhCheck,
	Copy as PhCopy,
	CreditCard as PhCreditCard,
	Cube as PhCube,
	Envelope as PhEnvelope,
	FolderSimple as PhFolderSimple,
	Globe as PhGlobe,
	Images as PhImages,
	Layout as PhLayout,
	Lifebuoy as PhLifebuoy,
	List as PhList,
	MagnifyingGlass as PhMagnifyingGlass,
	Moon as PhMoon,
	PaintBrushBroad as PhPaintBrushBroad,
	Plug as PhPlug,
	PuzzlePiece as PhPuzzlePiece,
	RocketLaunch as PhRocketLaunch,
	ShieldCheck as PhShieldCheck,
	Sidebar as PhSidebar,
	SquaresFour as PhSquaresFour,
	Stack as PhStack,
	Sun as PhSun,
	Table as PhTable,
	UserCircle as PhUserCircle,
	WebhooksLogo as PhWebhooksLogo,
	X as PhX,
} from '@phosphor-icons/react/dist/ssr';

export type IconType = ComponentType<IconProps>;

const make = (Icon: IconType, weight: IconWeight): IconType => {
	const Wrapped = (props: IconProps) => (
		<Icon
			weight={weight}
			{...props}
		/>
	);
	return Wrapped;
};

// Small glyphs.
export const ArrowLeft = make(PhArrowLeft, 'bold');
export const ArrowRight = make(PhArrowRight, 'bold');
export const ArrowUpRight = make(PhArrowUpRight, 'bold');
export const Check = make(PhCheck, 'bold');
export const Copy = make(PhCopy, 'regular');
export const Menu = make(PhList, 'regular');
export const Moon = make(PhMoon, 'regular');
export const Search = make(PhMagnifyingGlass, 'regular');
export const Sun = make(PhSun, 'regular');
export const X = make(PhX, 'regular');

// Guide tiles (content/guides.ts).
export const Book = make(PhBookOpenText, 'light');
export const Building = make(PhBuildings, 'light');
export const Chart = make(PhChartLine, 'light');
export const CreditCard = make(PhCreditCard, 'light');
export const Cube = make(PhCube, 'light');
export const Envelope = make(PhEnvelope, 'light');
export const Folder = make(PhFolderSimple, 'light');
export const Globe = make(PhGlobe, 'light');
export const Images = make(PhImages, 'light');
export const Layout = make(PhLayout, 'light');
export const Lifebuoy = make(PhLifebuoy, 'light');
export const PaintBrush = make(PhPaintBrushBroad, 'light');
export const Plug = make(PhPlug, 'light');
export const Puzzle = make(PhPuzzlePiece, 'light');
export const Rocket = make(PhRocketLaunch, 'light');
export const Shield = make(PhShieldCheck, 'light');
export const SidebarIcon = make(PhSidebar, 'light');
export const Squares = make(PhSquaresFour, 'light');
export const Stack = make(PhStack, 'light');
export const Table = make(PhTable, 'light');
export const User = make(PhUserCircle, 'light');
export const Webhooks = make(PhWebhooksLogo, 'light');
