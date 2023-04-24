import Foundation

@objc public class ChromeCrasher: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
