import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(TestPluginPlugin)
public class TestPluginPlugin: CAPPlugin {
    private let implementation = TestPlugin()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc func loginWithEmailOtp(_ call: CAPPluginCall) {
        let value = call.getString("email") ?? ""
        call.resolve([
            "didToken": "Hello"
        ])
    }
}
