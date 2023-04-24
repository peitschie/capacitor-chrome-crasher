package com.peitschie.plugins.chromecrasher;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ChromeCrasher")
public class ChromeCrasherPlugin extends Plugin {
    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void loadChromeUrl(PluginCall call) {
        String value = call.getString("url", "crash");
        bridge.executeOnMainThread(() -> bridge.getWebView().loadUrl("chrome://" + value));
    }
}
