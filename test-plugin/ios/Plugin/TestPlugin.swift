import Foundation

@objc public class TestPlugin: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
    
    @objc public func loginWithEmailOtp(_ email: String) -> String {
        print(email)
        return email
    }
}
