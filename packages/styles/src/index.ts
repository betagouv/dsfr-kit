// @ts-ignore
import formCss from "@gouvfr/dsfr/dist/component/form/form.min.css?inline";
// @ts-ignore
import linkCss from "@gouvfr/dsfr/dist/component/link/link.min.css?inline";
// @ts-ignore
import logoCss from "@gouvfr/dsfr/dist/component/logo/logo.min.css?inline";
// @ts-ignore
import coreCss from "@gouvfr/dsfr/dist/core/core.min.css?inline";
// @ts-ignore
import schemeCss from "@gouvfr/dsfr/dist/scheme/scheme.min.css?inline";
// @ts-ignore
import iconsCss from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";
// @ts-ignore
import utilityCss from "@gouvfr/dsfr/dist/utility/utility.min.css?inline";
import { unsafeCSS } from "lit";

export const coreStyles = unsafeCSS(coreCss);
export const schemeStyles = unsafeCSS(schemeCss);
export const utilityStyles = unsafeCSS(utilityCss);
export const iconsStyles = unsafeCSS(iconsCss);
export const formStyles = unsafeCSS(formCss);
export const linkStyles = unsafeCSS(linkCss);
export const logoStyles = unsafeCSS(logoCss);
