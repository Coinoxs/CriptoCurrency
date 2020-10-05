//
//  ViewController.swift
//  CriptoCurrency
//
//  Created by Soner ATMACA on 4.10.2020.
//

import UIKit

class ViewController: UIViewController{
  
  
    private let imageView: UIImageView = {
      let imageView = UIImageView(frame: CGRect(x: 0, y: 0, width: 150, height: 150))
      
      imageView.image = UIImage(named: "icon")
      return imageView
    }()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    view.addSubview(imageView)
    
  }
  
  override func viewDidLayoutSubviews() {
    super.viewDidLayoutSubviews()
    imageView.center = view.center
  }
}
