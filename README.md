# NeverProxy

This is a very small, simple extension that overrides system proxy settings and always runs Chrome with a proxy configuration of "Direct" (aka, no proxy). This is useful for situations where you need to have a system-wide proxy configuration in place, but want to exempt Chrome from using any proxy. Currently verified as compatible with Chrome 92+ and Vivaldi 4.1+.

Usage is very simple. Just install the addon, and it will override the proxy settings automatically each time the browser starts. If the proxy settings get changed by another extension while Chrome is still running, simply clicking on the extension's icon will override the proxy configuration again.

### Licenses
This extension is Open Source software, licensed under the MIT License (https://mit-license.org). Full source code can be found on GitLab (https://github.com/Argon-OpenHusky/NeverProxy). The icon used for this project was provided by Flaticon (https://www.flaticon.com/authors/pixel-perfect), and is separately licensed. 
