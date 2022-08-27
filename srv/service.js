const cds = require("@sap/cds");

class CatalogService extends cds.ApplicationService {
  async init() {
    const srv = await cds.connect.to("northwind");
    const { Products, Categories } = this.entities;

    this.on("READ", [ Products, Categories ], async (req) => {
      return await srv.tx(req).run(req.query);
    });
    await super.init();
  }
}

module.exports = CatalogService;
