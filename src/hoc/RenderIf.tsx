import React from "react";

export interface RenderIfProps {
	condition: boolean;
	children: React.ReactNode;
}

export function RenderIf({ condition, children }: RenderIfProps) {
	return <>{condition && React.Children.map(children, (child) => child)}</>;
}
