import { World } from './tree-of-addresses';


describe('addresses', () => {

  const world = new World();

  it('address is equal by value', () => {
    const a1 = { street: '123 Main St' };
    const a2 = { street: '123 Main St' };
    expect(world.addressesAreEqual(a1, a2)).toBe(true);
  })
});
