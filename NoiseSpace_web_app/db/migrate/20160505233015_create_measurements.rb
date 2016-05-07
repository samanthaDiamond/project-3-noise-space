class CreateMeasurements < ActiveRecord::Migration
  def change
    create_table :measurements do |t|
      t.datetime :datetime
      t.float :dB

      t.timestamps
    end
  end
end
