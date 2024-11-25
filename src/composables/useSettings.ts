import { ref, watch } from "vue";

/**
 * Exports the settings loaded from local storage and watches for their changes
 */
export default function useSettings() {
	// App

	const edgeReductionButtons = ref(
		localStorage.getItem("edgeReductionButtons") || "Hidden",
	);
	watch(edgeReductionButtons, (x) => {
		localStorage.setItem("edgeReductionButtons", x);
	});

	const optimizationDepth = ref(
		Number.parseInt(localStorage.getItem("optimizationDepth") || "4"),
	);
	watch(optimizationDepth, (x) => {
		localStorage.setItem("optimizationDepth", x.toString());
	});

	// Sheet

	const sheetLength = ref(
		Number.parseInt(localStorage.getItem("sheetLength") || "2800"),
	);
	watch(sheetLength, (x) => {
		localStorage.setItem("sheetLength", x.toString());
	});

	const sheetWidth = ref(
		Number.parseInt(localStorage.getItem("sheetWidth") || "2070"),
	);
	watch(sheetWidth, (x) => {
		localStorage.setItem("sheetWidth", x.toString());
	});

	const sheetTopEdgeReduction = ref(
		Number.parseInt(localStorage.getItem("sheetTopEdgeReduction") || "0"),
	);
	watch(sheetTopEdgeReduction, (x) => {
		localStorage.setItem("sheetTopEdgeReduction", x.toString());
	});

	const sheetRightEdgeReduction = ref(
		Number.parseInt(localStorage.getItem("sheetRightEdgeReduction") || "0"),
	);
	watch(sheetRightEdgeReduction, (x) => {
		localStorage.setItem("sheetRightEdgeReduction", x.toString());
	});

	const sheetBottomEdgeReduction = ref(
		Number.parseInt(localStorage.getItem("sheetBottomEdgeReduction") || "0"),
	);
	watch(sheetBottomEdgeReduction, (x) => {
		localStorage.setItem("sheetBottomEdgeReduction", x.toString());
	});

	const sheetLeftEdgeReduction = ref(
		Number.parseInt(localStorage.getItem("sheetLeftEdgeReduction") || "0"),
	);
	watch(sheetLeftEdgeReduction, (x) => {
		localStorage.setItem("sheetLeftEdgeReduction", x.toString());
	});

	// Blade

	const bladeThickness = ref(
		Number.parseInt(localStorage.getItem("bladeThickness") || "3"),
	);
	watch(bladeThickness, (x) => {
		localStorage.setItem("bladeThickness", x.toString());
	});

	// Panels

	const panelEdgeReduction = ref(
		Number.parseInt(localStorage.getItem("panelEdgeReduction") || "0"),
	);
	watch(panelEdgeReduction, (x) => {
		localStorage.setItem("panelEdgeReduction", x.toString());
	});

	// Other

	const currentTheme = ref(localStorage.getItem("currentTheme") || "lime");
	watch(currentTheme, (x) => {
		localStorage.setItem("currentTheme", x);
	});

	return {
		sheetLength,
		sheetWidth,
		sheetTopEdgeReduction,
		sheetRightEdgeReduction,
		sheetBottomEdgeReduction,
		sheetLeftEdgeReduction,
		bladeThickness,
		panelEdgeReduction,
		edgeReductionButtons,
		currentTheme,
		optimizationDepth,
	};
}
