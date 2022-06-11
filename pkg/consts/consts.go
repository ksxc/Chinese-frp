// Copyright 2016 fatedier, fatedier@gmail.com
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package consts

var (
	// proxy status
	Idle    string = "闲置"
	Working string = "工作"
	Closed  string = "关闭"
	Online  string = "在线"
	Offline string = "离线"

	// proxy type
	TCPProxy    string = "tcp"
	UDPProxy    string = "udp"
	TCPMuxProxy string = "tcpmux"
	HTTPProxy   string = "http"
	HTTPSProxy  string = "https"
	STCPProxy   string = "stcp"
	XTCPProxy   string = "xtcp"
	SUDPProxy   string = "sudp"

	// authentication method
	TokenAuthMethod string = "token"
	OidcAuthMethod  string = "oidc"

	// TCP multiplexer
	HTTPConnectTCPMultiplexer string = "httpconnect"
)
