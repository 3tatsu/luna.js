import type {
	ApplicationFlags,
	ApplicationIntegrationTypeConfigurationStructure,
	ApplicationIntegrationTypes,
	ApplicationRoleConnectionMetadataStructure,
	ApplicationStructure,
	InstallParamsStructure,
	Snowflake,
} from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records}
 */
export function getApplicationRoleConnectionMetadataRecords(applicationId: Snowflake): RestMakeRequestOptions<ApplicationRoleConnectionMetadataStructure[]> {
	return {
		method: "GET",
		path: `/applications/${applicationId}/role-connections/metadata`,
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records}
 */
export function updateApplicationRoleConnectionMetadataRecords(applicationId: Snowflake, metadata: ApplicationRoleConnectionMetadataStructure[]): RestMakeRequestOptions<ApplicationRoleConnectionMetadataStructure[]> {
	return {
		method: "PUT",
		path: `/applications/${applicationId}/role-connections/metadata`,
		body: JSON.stringify(metadata),
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/application#get-current-application}
 */
export function getCurrentApplication(): RestMakeRequestOptions<ApplicationStructure> {
	return {
		method: "GET",
		path: "/applications/@me",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application-json-params}
 */
export type EditCurrentApplicationJSON = {
	/**
	 * Default rich presence invite cover image for the app
	 */
	cover_image?: string | null;
	/**
	 * Default custom authorization URL for the app, if enabled
	 */
	custom_install_url?: string;
	/**
	 * Description of the app
	 */
	description?: string;
	/**
	 * App's public flags
	 */
	flags?: ApplicationFlags;
	/**
	 * Icon for the app
	 */
	icon?: string | null;
	/**
	 * Settings for the app's default in-app authorization link, if enabled
	 */
	install_params?: InstallParamsStructure;
	/**
	 * In preview. Default scopes and permissions for each supported installation context. Value for each key is an integration type configuration object
	 */
	integration_types_config?: Record<ApplicationIntegrationTypes, ApplicationIntegrationTypeConfigurationStructure>;
	/**
	 * Interactions endpoint URL for the app
	 */
	interactions_endpoint_url?: string;
	/**
	 * Role connection verification URL for the app
	 */
	role_connections_verification_url?: string;
	/**
	 * List of tags describing the content and functionality of the app (max of 20 characters per tag). Max of 5 tags.
	 */
	tags?: string[];
};

/**
 * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application}
 */
export function editCurrentApplication(json: EditCurrentApplicationJSON): RestMakeRequestOptions<ApplicationStructure> {
	return {
		method: "PATCH",
		path: "/applications/@me",
		body: JSON.stringify(json),
	};
}
