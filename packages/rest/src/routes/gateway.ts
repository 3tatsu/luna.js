import type { Integer } from "@lunajs/core";
import type { RestMakeRequestOptions } from "../globals/rest";

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway}
 */
export function getGateway(): RestMakeRequestOptions<{ url: string; }> {
	return {
		method: "GET",
		path: "/gateway",
	};
}

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#session-start-limit-object-session-start-limit-structure}
 */
export type SessionStartLimit = {
	/**
	 * Number of identify requests allowed per 5 seconds
	 */
	max_concurrency: Integer;
	/**
	 * Remaining number of session starts the current user is allowed
	 */
	remaining: Integer;
	/**
	 * Number of milliseconds after which the limit resets
	 */
	reset_after: Integer;
	/**
	 * Total number of session starts the current user is allowed
	 */
	total: Integer;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway-bot-json-response}
 */
export type GatewayBotResponse = {
	/**
	 * Information on the current session start limit
	 */
	session_start_limit: SessionStartLimit;
	/**
	 * Recommended number of shards to use when connecting
	 */
	shards: Integer;
	/**
	 * WSS URL that can be used for connecting to the Gateway
	 */
	url: string;
};

/**
 * @see {@link https://discord.com/developers/docs/topics/gateway#get-gateway}
 */
export function getGatewayBot(): RestMakeRequestOptions<GatewayBotResponse> {
	return {
		method: "GET",
		path: "/gateway/bot",
	};
}
