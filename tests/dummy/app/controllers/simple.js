import Controller from "@ember/controller";
import TreeNode from 'ember-tree-view/node';

export default Controller.extend({
  init() {
    this._super(...arguments);
    let family, lud, suz;
    family = TreeNode.create({
      title: 'Family'
    });
    suz = family.createChild({
      title: 'Susan'
    });
    lud = family.createChild({
      title: 'Luda'
    });
    suz.createChild({
      title: 'Josh'
    });
    suz.createChild({
      title: 'Moses'
    });
    lud.createChild({
      title: 'Verdi'
    });
    lud.createChild({
      title: 'Gaya'
    });
    return this.set('model', family);
  },
  actions: {
    expand() {
      this.get('selected').toggleProperty('expanded');
      return null;
    }
  }
});
