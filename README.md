```
                      <div key={item.id} className='cart-item'>
                                <div className='cart-header'>
                                    <img className='item-image' src={item.image} alt={item.name} />
                                    <h3 className='item-name'>{item.name}</h3>
                                </div>
                                <div className='item-details'>
                                    <p className='item-price'>{item.price}</p>
                                    <p className='item-quantity'>Quantity: {item.quantity } </p>
                                    <button className='quantity-button' onClick={() => increaseQuantity(item.id)}>+</button>
                                    <button className='quantity-button' onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </div>
```